interface AvatarProps {
  name: string
}

const Avatar = (props: AvatarProps) => {
  const { name } = props

  return (
    <div className="w-20 h-20 bg-OnPrimary rounded-full grid place-items-center border-2 border-OnPrimaryContainer">
      <p className="text-red-500 text-base">{name}</p>
    </div>
  )
}

export default Avatar
