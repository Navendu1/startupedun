export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="h-12 w-auto">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 0.1}}/>
          <stop offset="100%" style={{stopColor: '#4ECDC4', stopOpacity: 0.1}}/>
        </linearGradient>
      </defs>
      
      <path d="M50 40 L350 40 C370 40 380 50 380 70 L380 130 C380 150 370 160 350 160 L50 160 C30 160 20 150 20 130 L20 70 C20 50 30 40 50 40" 
            fill="url(#bgGradient)" 
            stroke="#FF6B6B" 
            strokeWidth="2"/>
      
      <path d="M320 40 Q340 60 320 80 T320 120" 
            fill="none" 
            stroke="#4ECDC4" 
            strokeWidth="3"/>
      
      <path d="M280 85 L290 75 L300 85 L290 95 Z" 
            fill="#FF6B6B"/>
      <path d="M285 90 Q290 80 295 90" 
            fill="none" 
            stroke="#4ECDC4" 
            strokeWidth="2" 
            strokeLinecap="round"/>
      
      <text x="60" y="110" 
            fontFamily="Arial" 
            fontSize="42" 
            fontWeight="700">
        <tspan fill="#FF6B6B">Startup</tspan>
        <tspan fill="#4ECDC4">Edu</tspan>
      </text>
      
      <circle cx="320" cy="95" r="3" fill="#FF6B6B"/>
      <circle cx="330" cy="95" r="3" fill="#4ECDC4"/>
      <circle cx="340" cy="95" r="3" fill="#FFE66D"/>
      
      <path d="M60 120 L200 120" 
            stroke="#FF6B6B" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.5"/>
      
      <text x="60" y="140" 
            fontFamily="Arial" 
            fontSize="12" 
            fill="#1A535C" 
            letterSpacing="1">INNOVATE • LEARN • GROW</text>
    </svg>
  );
}
