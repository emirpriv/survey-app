import { Carousel, Col, Modal, Row } from "antd";
import { React, useState } from "react";
import memories from "../data/memories";
import timeline_data from "../data/timeline-data";
import "../styles/timeline.css";
import MemoryCard from "./MemoryCard";
import TimeTunnel from "./TimeTunnel";

const Timeline = () => {
  const months = Object.keys(memories);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnvelopeClickable, setIsEnvelopeClickable] = useState(false);
  const memoryCards = memories[months[index]];

  const showModal = (val) => {
    console.log(val);

    setIsModalOpen(true);
    setIndex(val);

    if (val === 6) {
      setIsEnvelopeClickable(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="timeline">
      <TimeTunnel isEnvelopeClickable={isEnvelopeClickable} />
      <Row gutter={[0, 32]}>
        {timeline_data.map((data, index) => (
          <Col
            xl={[0, 1, 5, 6].includes(index) ? 12 : 8}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            key={index}
          >
            <MemoryCard memory={data} onClick={() => showModal(index)} hover />
          </Col>
        ))}
      </Row>
      <Modal
        width={720}
        centered
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="timeline-modal"
      >
        <Carousel
          arrows
          dotPosition="left"
          infinite={false}
          dots={{ className: "custom-dots" }}
          // adaptiveHeight
          // centerMode
          // centerPadding="80px"
        >
          {memoryCards?.map((item, index) => (
            <div className="carousel-content" key={index}>
              <MemoryCard memory={item} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default Timeline;
