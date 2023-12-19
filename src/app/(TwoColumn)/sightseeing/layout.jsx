import {Banner, Breadcrumb, PageTitle, TagArea, TagKeyword} from "@/components/common";
import {getContentList} from "@/components/common/fetchData";
import Feature from "@/components/section/feature/Feature";

export default async function Layout({ children }) {
  const {list, pageInfo} = await getContentList("SIGHTSEEING");
  return (
    <div className="l-container">
      <Breadcrumb data={list} />
      <PageTitle data={list} />
      <div className="l-container--col-2 l-container--contents">
        <div className="l-container--col-2__main">{children}</div>
        <div className="l-container--col-2__side">
          <Banner />
          <Feature />
          <TagArea />
          <TagKeyword />
        </div>
      </div>
    </div>
  );
}
