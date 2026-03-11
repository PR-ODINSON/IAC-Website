import usePageTitle from '../hooks/usePageTitle';
import { useSEO } from '../utils/seo';
import './PanelDiscussion.css';

const PanelDiscussion = () => {
    usePageTitle('Panel Discussions');

    useSEO({
        title: 'Panel Discussions - Udgam 2026 | CDC IITRAM',
        description: 'Explore the two major panel discussions at Udgam 2026. Join industry experts, government officials, and academics as they discuss Synergy in Innovation and Industry 4.0.',
        keywords: 'udgam panel discussions, industry academia conclave, industry 4.0 panel, collaborative innovation',
        image: 'https://udgam-iac.iitram.in/iac-2026-cover.png'
    });

    const panels = [
        {
            id: 1,
            day: 'Day 1: Friday, Feb 27',
            time: '02:00 PM – 03:30 PM',
            title: 'Collaboration, Not Cooperation – A Synergistic Approach of Industry, Government, and Academia',
            description: 'This panel explores the shift from simple cooperation to deep-seated collaboration between key sectors. Experts will discuss how institutional synergy can accelerate innovation and create a robust ecosystem for national growth.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            id: 2,
            day: 'Day 2: Saturday, Feb 28',
            time: '11:15 AM – 12:45 PM',
            title: 'Industry 4.0: The Evolving Landscape of Technology and Human Resource',
            description: 'A deep dive into the Fourth Industrial Revolution. Our panelists will address the integration of smart technologies and the essential evolution of human skills needed to thrive in an automated yet human-centric industrial future.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            )
        }
    ];

    return (
        <div className="panel-discussion-page">
            <div className="page-hero">
                <div className="page-hero-container">
                    <h1 className="page-hero-title">Panel Discussions</h1>
                    <p className="page-hero-description">
                        Engaging dialogues featuring industry veterans and academic leaders discussing the future of technology and collaboration.
                    </p>
                </div>
            </div>

            <div className="panels-container">
                {panels.map((panel) => (
                    <div key={panel.id} className="panel-card">
                        <div className="panel-info">
                            <div className="panel-meta">
                                <span className="panel-day">{panel.day}</span>
                                <span className="panel-time">{panel.time}</span>
                            </div>
                            <h2 className="panel-title">{panel.title}</h2>
                            <p className="panel-description">{panel.description}</p>
                        </div>
                        <div className="panel-icon-bg">
                            {panel.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PanelDiscussion;
