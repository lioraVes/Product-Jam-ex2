"use client"; // Mark this file as a Client Component
import { useState, useEffect } from "react";
import styles from "./page.module.css";

// Define the type for each item in the API response
interface NasaDataItem {
  title: string;
  date: string;
  explanation: string;
  url: string;
  media_type: "image" | "video" | "other"; // The media type will be either "image" or "video"
}


// Function to extract the YouTube Video ID from the URL
function getYouTubeVideoID(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

async function getData(count:number) {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=${count}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default function Nasa() {
  const [data, setData] = useState<NasaDataItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData(10);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <main>Loading The Data...</main>;
  }

  return (
    <main>
      <h1>NASA Astronomy Pictures of the Day</h1>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            {item.media_type === "image" ? (
              <img src={item.url} alt={item.title} className={styles.image} />
            ) : item.media_type === "video" && (item.url.includes("youtube.com") || item.url.includes("youtu.be")) ? (
              <div className={styles.videoContainer}>
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoID(item.url)}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen> </iframe>
              </div>
            ) : (
            <div className={styles.placeholder}>
              <img src="/placeholder.jpg" alt="Not-Available" className={styles.placeholderImage} />
              <p className={styles.placeholderText}>
                Not available,{" "}
                <a href={item.url} target="_blank" rel="noopener noreferrer">View here</a>
              </p>
            </div> 
            )}
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.explanation}>{item.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
