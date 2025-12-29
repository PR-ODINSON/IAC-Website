import './SkeletonLoader.css';

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-icon"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text short"></div>
  </div>
);

export const SkeletonSpeakerCard = () => (
  <div className="skeleton-speaker-card">
    <div className="skeleton-avatar"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
  </div>
);

export const SkeletonScheduleItem = () => (
  <div className="skeleton-schedule-item">
    <div className="skeleton-time"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 3, type = 'card' }) => {
  const SkeletonComponent = 
    type === 'speaker' ? SkeletonSpeakerCard :
    type === 'schedule' ? SkeletonScheduleItem :
    SkeletonCard;

  return (
    <div className={`skeleton-grid skeleton-grid-${type}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
