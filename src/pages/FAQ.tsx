import React, { useState, useEffect } from 'react';
import { Navbar } from './../blocks/Navbar';
import { TitleBanner } from '../blocks/TitleBanner/TitleBanner';
import { Accordion } from '../blocks/Accordion/Accordion';
import faqImage from './../assets/image/faq.jpg';
import { Footer } from '../blocks/Footer';

interface FaqItem {
  title: string;
  desc: string;
}

export const FAQ = () => {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/faq.json`);
      const data: FaqItem[] = await response.json();
      setFaqData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <TitleBanner title="FAQ" description="najczęściej zadawane pytania" image={faqImage} />
      <div className="faq-container">
        {faqData.map((item, index) => (
          <Accordion key={index} title={item.title} desc={item.desc} />
        ))}
      </div>
      <Footer />
    </>
  );
};
