export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className='bg-red-50 px-10 py-5 rounded-3xl'>{children}</article>;
}
