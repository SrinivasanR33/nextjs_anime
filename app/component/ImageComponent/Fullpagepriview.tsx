

export default function ImageDetail({ image }: { image: string }) {
    const handleDownload: any = () => {
        // Assuming image.url is the URL of the image
        const link = document.createElement("a");
        link.href = image;
        link.download = "wallpaper.jpg"; // You can customize the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            {/* <img src={image} alt={"hi"} /> */}
            {/* <p>{image}</p> */}
            <button className="btn btn-secondary" onClick={handleDownload}>Download Wallpaper</button>
        </div>
    );
}