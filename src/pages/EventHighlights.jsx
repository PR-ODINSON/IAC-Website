import React, { useState, useEffect, useCallback } from 'react';
import './EventHighlights.css';

// Vite: Dynamically import all compressed images from public/EventHighlights/compressed
const imageContext = import.meta.glob('/public/EventHighlights/compressed/*.{jpg,jpeg,JPG,JPEG}', { eager: true, as: 'url' });

const images = Object.values(imageContext);

// Split images into two rows for opposing marquee directions
const rowA = images.filter((_, i) => i % 2 === 0);
const rowB = images.filter((_, i) => i % 2 !== 0);

// Duplicate each row for seamless looping
const trackA = [...rowA, ...rowA];
const trackB = [...rowB, ...rowB];

const EventHighlights = () => {
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index into `images`

  const openLightbox = useCallback((idx) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goPrev = useCallback(() =>
    setLightbox(i => (i - 1 + images.length) % images.length), []);
  const goNext = useCallback(() =>
    setLightbox(i => (i + 1) % images.length), []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, goPrev, goNext]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const handleCardClick = (originalIdx) => openLightbox(originalIdx);

  return (
    <div className="eh-container">
      {/* Decorative background orbs */}
      <div className="eh-orb eh-orb--1" aria-hidden="true" />
      <div className="eh-orb eh-orb--2" aria-hidden="true" />
      <div className="eh-orb eh-orb--3" aria-hidden="true" />

      {/* Header */}
      <div className="eh-header">
        <span className="eh-badge">Gallery</span>
        <h1 className="eh-title">
          Event <span className="eh-title-accent">Highlights</span>
        </h1>
        <p className="eh-subtitle">
          Relive the moments!
        </p>
        <div className="eh-title-underline" />
      </div>

      {/* Dual-row marquee */}
      <div
        className={`eh-marquee-stage${paused ? ' paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label="Event Highlights Gallery"
      >
        {/* Edge fades */}
        <div className="eh-fade eh-fade--left" aria-hidden="true" />
        <div className="eh-fade eh-fade--right" aria-hidden="true" />

        {/* Row A — scrolls left */}
        <div className="eh-row">
          <div className="eh-track eh-track--left">
            {trackA.map((img, idx) => {
              const originalIdx = images.indexOf(rowA[idx % rowA.length]);
              return (
                <div
                  key={`a-${idx}`}
                  className="eh-card"
                  onClick={() => handleCardClick(originalIdx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View highlight ${(idx % rowA.length) + 1}`}
                  onKeyDown={e => e.key === 'Enter' && handleCardClick(originalIdx)}
                >
                  <img
                    src={img}
                    alt={`Event Highlight ${(idx % rowA.length) + 1}`}
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="eh-card-overlay">
                    <svg className="eh-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row B — scrolls right */}
        {rowB.length > 0 && (
          <div className="eh-row">
            <div className="eh-track eh-track--right">
              {trackB.map((img, idx) => {
                const originalIdx = images.indexOf(rowB[idx % rowB.length]);
                return (
                  <div
                    key={`b-${idx}`}
                    className="eh-card"
                    onClick={() => handleCardClick(originalIdx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View highlight ${(idx % rowB.length) + 1}`}
                    onKeyDown={e => e.key === 'Enter' && handleCardClick(originalIdx)}
                  >
                    <img
                      src={img}
                      alt={`Event Highlight ${(idx % rowB.length) + 1}`}
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="eh-card-overlay">
                      <svg className="eh-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="eh-footer-hint">
        <span className="eh-dot" />
        <span>Udgam IAC 2026</span>
        <span className="eh-dot" />
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="eh-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button className="eh-lb-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button
            className="eh-lb-nav eh-lb-nav--prev"
            onClick={e => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="eh-lb-content" onClick={e => e.stopPropagation()}>
            <img
              key={lightbox}
              className="eh-lb-img"
              src={images[lightbox]}
              alt={`Event Highlight ${lightbox + 1}`}
              draggable="false"
            />
            <div className="eh-lb-counter">{lightbox + 1} / {images.length}</div>
          </div>

          <button
            className="eh-lb-nav eh-lb-nav--next"
            onClick={e => { e.stopPropagation(); goNext(); }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default EventHighlights;
