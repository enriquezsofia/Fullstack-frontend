import React from "react";
import FeaturedPost from "../components/FeaturedPost";
import ListOfPost from "../components/ListOfPost";

const HomePage = ({allPosts, onDelete}) => {
  return (
    <>
    <div style={{backgroundColor: "#F7F7F7"}}>
      <FeaturedPost
        updatedAt={"May 13 2021"}
        height={500}
        width={500}
        title={"The Internet of Medical Things: The Healthcare Revolution"}
        content={
          "Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."
        }
        image={
          "https://itjuana.com/wp-content/uploads/Reasons-why-the-Healthcare-Life-Sciences-sector-is-stronger-than-ever.jpg"
        }
      />
      <ListOfPost posts={allPosts} onDelete={onDelete}/>
      </div>
    </>
  );
};

export default HomePage;
