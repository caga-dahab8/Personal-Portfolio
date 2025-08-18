import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 32px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  margin: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px;
    max-width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary + 20};
    color: ${({ theme }) => theme.primary};
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.text_secondary + 80};
  font-size: 14px;
  margin-bottom: 20px;
`;

const MediaContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const Category = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const ProjectModal = ({ openModal, setOpenModal }) => {
  const { project } = openModal;

  const handleClose = () => {
    setOpenModal({ state: false, project: null });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Modal onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
        
        <Category>{project.category}</Category>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        
        <MediaContainer>
          {project.video ? (
            <Video controls>
              <source src={project.video} type="video/mp4" />
              <source src={project.video} type="video/mov" />
              Your browser does not support the video tag.
            </Video>
          ) : (
            <Image src={project.image} alt={project.title} />
          )}
        </MediaContainer>
        
        <Description>{project.description}</Description>
        
        <TagsContainer>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;