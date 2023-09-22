import { ILeaderboardsComponent } from '@/app/components/Leaderboards/interfaces/ILeaderboardsComponent';
import LeaderBoardsBox from '@/app/components/Leaderboards/LeaderboardsBox';
import { getServerSideProps } from '@/app/components/Leaderboards/ServerSide/LeaderServerSideProps';
import AnnouncementBar from '@/app/components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/app/components/static/Components/footer/footer';
import Header from '@/app/components/static/Components/header/header';
import Main from '@/app/components/static/Components/Main/main';
import Navigator from '@/app/components/static/Components/nav/navigator';
import Head from 'next/head';
import cnf from '../../../cms-config.json';
import '/styles/styles.css';

export default function LeaderBoards(data: ILeaderboardsComponent) {
  return (
    <>
      <Head>
        <title>{cnf.texts.LEADER_TITLE}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar
        title={cnf.texts.LEADER_AB_TITLE}
        description={cnf.texts.LEADER_AB_DESC}
      />
      <Main
        child={
          <div className="leaderboards">
            <LeaderBoardsBox
              title={cnf.texts.LEADER_CREDITS_TITLE}
              type={cnf.texts.LEADER_CREDITS}
              data={data.cr_topList}
            />
            <LeaderBoardsBox
              title={cnf.texts.LEADER_DUCKETS_TITLE}
              type={cnf.texts.LEADER_DUCKETS}
              data={data.du_topList}
            />
            <LeaderBoardsBox
              title={cnf.texts.LEADER_DIAMONDS_TITLE}
              type={cnf.texts.LEADER_DIAMONDS}
              data={data.di_topList}
            />
            <LeaderBoardsBox
              title={cnf.texts.LEADER_ACHIEVEMENT_TITLE}
              type={cnf.texts.LEADER_ACHIEVEMENT_SCORE}
              data={data.as_topList}
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
export { getServerSideProps };
