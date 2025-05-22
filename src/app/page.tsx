'use client'

export default function Home() {
  return (
    <div className="parent">
    <p>only this paragraph will get the style :)</p>

    <style jsx>{`
      div {
          &.parent {
              color: green;
          }
      }
    `}</style>
  </div>
  );
}
