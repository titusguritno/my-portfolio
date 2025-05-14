import Image from "next/image";

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl h-[80vh]">
        <Image
          src={imageUrl}
          alt="Full image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
