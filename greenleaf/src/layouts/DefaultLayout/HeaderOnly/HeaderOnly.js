
// const STUDENT_INFOR = {
//   avatar:
//     "https://yt3.ggpht.com/GjartrTLhQvp96ZhPEoP-gnyujfVOQMID3uyEuQv3OgPy-MFVo2chpJVrJjVgYyFAvARF-1DDaI=s88-c-k-c0x00ffffff-no-rj",
//   title: "View Student Profile",
//   userName: "John Doe",
//   icon: images.verifile,
//   account: "Johndoe@gmail.com",
// };

function HeaderOnly({ children }) {

 
  return (
    <header className={("wrapper")}>
  

      <div className={("content")}> {children}</div>
    </header>
  );
}

export default HeaderOnly;
