export default function VideoDemoSection() {
  return (
    <section className="bg-gray-50 py-24 flex justify-center items-center">
      <div className="max-w-5xl w-full px-4">
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">

          <video
            src="https://entrepedia-products.com/website/scrolling.mp4"
            poster="https://framerusercontent.com/images/Bk8arqrfGxts3p1Pgct6VGD4GU.jpeg?width=1280&height=627"
            loop
            playsInline
            autoPlay
            muted
            controls
            className="w-full h-full rounded-xl object-cover object-center"
          ></video>

        </div>
      </div>
    </section>
  );
}
