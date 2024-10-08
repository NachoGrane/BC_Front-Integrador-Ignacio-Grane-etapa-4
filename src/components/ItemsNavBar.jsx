import PagesNavbar from "./PagesNavbar";

const ItemsNavBar = () => {
  return (
    <>
      <PagesNavbar PageToGo="/" Icon="house-fill" name="home"></PagesNavbar>
      <PagesNavbar
        PageToGo="/playstation"
        Icon="playstation"
        name="playstation"
      ></PagesNavbar>
      <PagesNavbar
        PageToGo="/nintendo"
        Icon="nintendo-switch"
        name="nintendo"
      ></PagesNavbar>
      <PagesNavbar PageToGo="/xbox" Icon="xbox" name="xbox"></PagesNavbar>
      <PagesNavbar
        PageToGo="/perifericos"
        Icon="controller"
        name="perifericos"
      ></PagesNavbar>
    </>
  );
}

export default ItemsNavBar