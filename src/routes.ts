import UserLayout from '@/layouts/UserLayout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import BasicLayout from '@/layouts/BasicLayout';
import Solution from '@/pages/Solution';
import Analysis from '@/pages/Analysis';
import Monitor from '@/pages/Monitor';
import Workplace from '@/pages/Workplace';
import FormBasic from '@/pages/FormBasic';
import FormTwo from '@/pages/FormTwo';
import FormThree from '@/pages/FormThree';
import FormFour from '@/pages/FormFour';
import FormStep from '@/pages/FormStep';
import FormClassified from '@/pages/FormClassified';
import FormHierarchical from '@/pages/FormHierarchical';
import FormGroup from '@/pages/FormGroup';
import FlowGroup from '@/pages/FlowGroup';
import BasicDetailPage from '@/pages/BasicDetailPage';
import Advanced from '@/pages/Advanced';
import BasicListPage from '@/pages/BasicListPage';
import CardListPage from '@/pages/CardListPage';
import FusionFilterTable from '@/pages/FusionFilterTable';
import FusionMutilcolTable from '@/pages/FusionMutilcolTable';
import FusionSinglecolTable from '@/pages/FusionSinglecolTable';
import FusionExpandTable from '@/pages/FusionExpandTable';
import FusionActionTable from '@/pages/FusionActionTable';
import FusionMergecellTable from '@/pages/FusionMergecellTable';
import FusionSingletreeTable from '@/pages/FusionSingletreeTable';
import FusionDialogTable from '@/pages/FusionDialogTable';
import TableListPage from '@/pages/TableListPage';
import FeedbackFail from '@/pages/FeedbackFail';
import FeedbackSuccess from '@/pages/FeedbackSuccess';
import FeedbackForbidden from '@/pages/FeedbackForbidden';
import FeedbackNotFound from '@/pages/FeedbackNotFound';
import FeedbackServerError from '@/pages/FeedbackServerError';
import Settings from '@/pages/Settings';
import Person from '@/pages/Person';
import withAuth from '@/components/Auth';

const routerConfig = [
  {
    path: '/auth',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/auth/login',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/solution',
        component: Solution,
        wrappers: [withAuth],
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
        wrappers: [withAuth],
      },
      {
        path: '/dashboard/monitor',
        component: Monitor,
        wrappers: [withAuth],
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
        wrappers: [withAuth],
      },
      {
        path: '/form/basic',
        component: FormBasic,
        wrappers: [withAuth],
      },
      {
        path: '/form/two',
        component: FormTwo,
        wrappers: [withAuth],
      },
      {
        path: '/form/three',
        component: FormThree,
        wrappers: [withAuth],
      },
      {
        path: '/form/four',
        component: FormFour,
        wrappers: [withAuth],
      },
      {
        path: '/form/step',
        component: FormStep,
        wrappers: [withAuth],
      },
      {
        path: '/form/classified',
        component: FormClassified,
        wrappers: [withAuth],
      },
      {
        path: '/form/hierarchical',
        component: FormHierarchical,
        wrappers: [withAuth],
      },
      {
        path: '/form/group',
        component: FormGroup,
        wrappers: [withAuth],
      },
      {
        path: '/form/flow',
        component: FlowGroup,
        wrappers: [withAuth],
      },
      {
        path: '/detail/basic',
        component: BasicDetailPage,
        wrappers: [withAuth],
      },
      {
        path: '/detail/advanced',
        component: Advanced,
        wrappers: [withAuth],
      },
      {
        path: '/list/basic',
        component: BasicListPage,
        wrappers: [withAuth],
      },
      {
        path: '/list/card',
        component: CardListPage,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/filter',
        component: FusionFilterTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/mutilcol',
        component: FusionMutilcolTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/singlecol',
        component: FusionSinglecolTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/expand',
        component: FusionExpandTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/action',
        component: FusionActionTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/mergecell',
        component: FusionMergecellTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/singletree',
        component: FusionSingletreeTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table/dialog',
        component: FusionDialogTable,
        wrappers: [withAuth],
      },
      {
        path: '/list/table',
        component: TableListPage,
        wrappers: [withAuth],
      },
      {
        path: '/feedback/fail',
        component: FeedbackFail,
        wrappers: [withAuth],
      },
      {
        path: '/feedback/success',
        component: FeedbackSuccess,
        wrappers: [withAuth],
      },
      {
        path: '/feedback/403',
        component: FeedbackForbidden,
        wrappers: [withAuth],
      },
      {
        path: '/feedback/404',
        component: FeedbackNotFound,
        wrappers: [withAuth],
      },
      {
        path: '/feedback/500',
        component: FeedbackServerError,
        wrappers: [withAuth],
      },
      {
        path: '/settings',
        component: Settings,
        wrappers: [withAuth],
      },
      {
        path: '/person',
        component: Person,
        wrappers: [withAuth],
      },
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
    ],
  },
];
export default routerConfig;
