import { IStaffComponent } from '@/Components/Staff/interfaces/IStaffComponent';
import { getServerSideProps } from '@/Components/Staff/ServerSide/StaffServerSideProps';
import StaffMenu from '@/Components/Staff/StaffMenu';
import { StaffTeam } from '@/Components/Staff/StaffTeam';
import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import cnf from 'cms-config.json';
import Head from 'next/head';
import { useState } from 'react';
import '/styles/styles.css';
export default function StaffPage(data: IStaffComponent) {
  const [rank, setRank] = useState<number>(14);

  return (
    <>
      <Head>
        <title>Raze - Staff</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.STAFFS_AB_TITLE}
        description={cnf.texts.STAFFS_AB_DESC}
      />

      <Main
        child={
          <>
            <StaffMenu
              setRank={(s: number) => setRank(s)}
              currentRank={rank}
              ranks={data.ranks!}
            />
            <StaffTeam
              currentRank={rank}
              rankName={data.ranks?.find((u) => u.id == rank)!.rank_name!}
              staffs={data.staffs!}
            />
          </>
        }
      />
      <Footer />
    </>
  );
}

export { getServerSideProps };
