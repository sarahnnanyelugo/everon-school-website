import { PageIntro } from "../../components/PageIntro/PageIntro";
import { about } from "../../TestData/PageMenu";
import pageBanner from "../../assets/images/students.png";

export const About = () => {
  return (
    <>
      <PageIntro
        pageBanner={pageBanner}
        menuItems={about}
        pageTitle="About Us"
        pageSummary="Learn more about our history, values, facilities, and dedicated staff."
      />
    </>
  );
};
