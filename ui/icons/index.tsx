export function UserSvg({width, height}: {width?: string; height?: string}) {
  return (
    <svg
      width={width || '45'}
      height={height || '43'}
      viewBox={`0 0 ${width || '45'} ${height || '43'}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.5 21.5568C28.5841 21.5568 33.5119 16.7986 33.5119 10.9239C33.5119 5.04924 28.5841 0.291016 22.5 0.291016C16.4159 0.291016 11.4881 5.04924 11.4881 10.9239C11.4881 16.7986 16.4159 21.5568 22.5 21.5568ZM22.5 26.8733C15.1496 26.8733 0.476196 30.4353 0.476196 37.5062V42.8227H44.5238V37.5062C44.5238 30.4353 29.8505 26.8733 22.5 26.8733Z'
        fill='#BB46C4'
      />
    </svg>
  );
}