import React, { useState, useEffect } from 'react';
import { Navbar } from './../blocks/Navbar';
import { TitleBanner } from './../blocks/TitleBanner';
import { Accordion } from './../blocks/Accordion';
import faqImage from './../assets/image/faq.jpg';
import { Footer } from '../blocks/Footer';
export const FAQ = () => {
  const [faqData, setFaqData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./../../../public/data/faq.json');
      const data = await response.json();
      setFaqData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <TitleBanner
        title="FAQ"
        description="najczęsciej zadawane pytania"
        image={faqImage}
      ></TitleBanner>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <Accordion key={index} title={item.title} desc={item.desc} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};
