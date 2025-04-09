"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <a
        href="https://wa.me/7715864243?text=Hello%20AKAC!%20I%20need%20help%20with%20my%20air%20conditioning."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isHovered ? '#128C7E' : '#25D366',
          color: '#fff',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          animation: 'pulse 2s infinite',
        }}
      >
        <MessageCircle size={28} />
        
        {/* Optional tooltip */}
        {isHovered && (
          <span style={{
            position: 'absolute',
            right: '70px',
            whiteSpace: 'nowrap',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            animation: 'fadeIn 0.2s ease-out',
          }}>
            Chat with us!
          </span>
        )}
      </a>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}