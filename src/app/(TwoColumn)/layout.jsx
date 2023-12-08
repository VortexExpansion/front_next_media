import Breadcrumb from "@/components/common/Breadcrumb";
import PageTitle from "@/components/common/PageTitle";
import Banner from "@/components/common/Banner";
import Feature from "@/components/common/Feature";
import TagArea from "@/components/common/TagArea";
import TagKeyword from "@/components/common/TagKeyword";

export default function TowColumnLayout({ children }) {
  return (
    <div className="l-container">
      <Breadcrumb />
      <PageTitle />
      <div className="l-container--col-2 l-container--contents">
        <div className="l-container--col-2__main">
          {children}
        </div>
        <div className="l-container--col-2__side">
          <Banner />
          <Feature />
          <TagArea />
          <TagKeyword />
        </div>
      </div>
    </div>
  )
}