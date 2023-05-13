interface AvatarProps {
  name: string
  image: string
}

const Avatar = (props: AvatarProps) => {
  const { name, image } = props

  // return (
  //   <div className="w-20 h-20 bg-OnPrimary rounded-full grid place-items-center border-2 border-OnPrimaryContainer">
  //     <p className="text-red-500 text-base">{name}</p>
  //   </div>
  // )

  return (
    <div>
      <img className="userIcon" src={image} alt={name} />
    </div>
  )
}

export default Avatar
