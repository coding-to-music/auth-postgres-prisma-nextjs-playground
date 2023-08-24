import Image from "next/image";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  //   imageSize: 90,
  width: 50,
  height: 50,
};

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

//   export default function ProfileImage() {
//     return <Image src="..." style={imageStyle} />
//   }

export default function Profile() {
  return (
    <Image
      src={user.imageUrl}
      alt={"Photo of " + user.name}
      width={user.width}
      height={user.height}
      style={imageStyle}
    />
  );
}
