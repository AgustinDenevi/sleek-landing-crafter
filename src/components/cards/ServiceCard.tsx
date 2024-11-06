import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  Icon: IconType;
  onClick: () => void;
  x?: any;
  opacity?: any;
}

const ServiceCard = ({ title, Icon, onClick, x, opacity }: ServiceCardProps) => {
  return (
    <motion.div 
      className="card"
      style={{ x, opacity }} 
      transition={{ duration: 0.5, delay: 0 }}
      onClick={onClick}
    >
      <div className="card2">
        <h3>Get your</h3>
        <h2 className="service-title">{title}</h2>
        <div className="icon">
          <Icon />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;