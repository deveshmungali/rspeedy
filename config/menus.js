
import {
  Application,
  Chart,
  Components,
  DashBoard,
  Stacks2,
  Settings,
  Map,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
  Flag,
  Book,
  Note,
  ClipBoard2,
  Note2,
  Note3,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  Google,
  Pointer,
  Map2,
  MenuBar,
  Icons,
  ChartArea,
  UserLog,
  BubbleChart,
  LiveChat,
  Sheild,
  Error,
  Diamond,
  Heroicon,
  LucideIcon,
  List,
  CustomIcon,
  User,
  Mail,
  Authentication,
  UserSign,
  Refund,
  Cancellation,
  Payment,
  Register,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "Home",
      icon: DashBoard,
      href: "/dashboard",
      child: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "visitors",
          href: "/visitors",
          icon: Cart,
        }
      ],
    },
    {
      title: "Website Owners",
      icon: Application,
      child: [
        {
          title: "Website Owners List",
          href: "/website-owners-list",
          icon: Files,
        },
        {
          title: "Add Website Owners",
          href: "/add-website-owner",
          icon: Files,
        },
        {
          title: "Unverified Owners",
          href: "/unverified-owners",
          icon: Files,
        },
        {
          title: "Deleted Owners",
          href: "/deleted-owners",
          icon: Flag,
        },
      ],
    },
    {
      title: "Script Installation Request",
      icon: Book,
      child: [
        {
          title: "Pending Requests",
          href: "/pending-requests",
          icon: List,
        },
        {
          title: "Critical Requests",
          href: "/critical-requests",
          icon: Flag,
        },
        {
          title: "Completed Requests",
          href: "/completed-requests",
          icon: ListFill,
        },
      ],
    },
    {
      title: "App Sumo",
      icon: Components,
      child: [
        {
          title: "Website Owners",
          href: "/website-owners",
          icon: List,
        },
        {
          title: "Codes",
          href: "/sumo-codes",
          icon: MenuBar,
        },
        {
          title: "Deleted Customers",
          href: "/deleted-appsumo",
          icon: Flag,
        }
      ],
    },
    {
      title: "Staff",
      icon: User,
      child: [
        {
          title: "Staff Lists",
          href: "/staff",
          icon: List,
        },
        {
          title: "Roles",
          href: "/role",
          icon: Graph,
        },
        {
          title: "Permissions",
          href: "/permission",
          icon: Note3,
        },
        {
          title: "Activity Log",
          href: "/activity",
          icon: MenuBar,
        }
      ],
    },
    {
      title: "Coupons",
      icon: Note3,
      child: [
        {
          title: "Coupons",
          href: "/coupons",
        },
      ]
    },
    {
      title: "Script Id Info",
      icon: Authentication,
      child: [
        {
          title: "Script Id",
          href: "/script-id",
        },
      ]
    },
    {
      title: "Email",
      icon: Envelope,
      child: [
        {
          title: "Email Templates",
          href: "/email-templates",
          icon: Envelope,
        },
        {
          title: "Send Email",
          href: "/send-email",
          icon: Envelope,
        },
        {
          title: "Newsletter Templates",
          href: "/newsletter",
          icon: Envelope,
        },
      ]
    },
    {
      title: "Enquiry Form",
      icon: ClipBoard,
      child: [
        {
          title: "Enquiry Form",
          href: "/enquiry-form",
        },
      ]
    },
    {
      title: "Feedbacks",
      icon: UserSign,
      child: [
        {
          title: "Feedbacks",
          href: "/feedback",
        },
      ]
    },
    {
      title: "Reports",
      icon: ClipBoard2,
      child: [
        {
          title: "Payments",
          href: "/payments",
          icon: Payment,
        },
        {
          title: "Registrations",
          href: "/registrations",
          icon: Register,
        },
        {
          title: "Cancellations",
          href: "/cancellations",
          icon: Cancellation,
        },
        {
          title: "Refunds",
          href: "/refunds",
          icon: Refund,
        },
        {
          title: "User URL Search Log",
          href: "/logs",
          icon: UserLog,
        },
      ]
    },
    {
      title: "Support",
      icon: BubbleChart,
      child: [
        {
          title: "Live Chat",
          href: "/live-chat",
          icon: LiveChat,
        },
        {
          title: "All Tickets",
          href: "/all-ticket",
          icon: Envelope,
        },
        {
          title: "Resolved Ticket",
          href: "/resolved-ticket",
          icon: Envelope,
        },
        {
          title: "Pending Ticket",
          href: "/pending-ticket",
          icon: Envelope,
        },
      ]
    },
    {
      title: "Tester",
      icon: Pointer,
      child: [
        {
          title: "Makkpress Testers",
          href: "/makkpress-testers",
          icon: Pointer,
        },
        {
          title: "Installation Requests",
          href: "/install-requests",
          icon: Pointer,
        },
      ]
    },
    {
      title: "Settings",
      icon: Settings,
      child: [
        {
          title: "General",
          href: "/general",
          icon: Note3,
        },
        {
          title: "Security",
          href: "/security",
          icon: Note3,
        },
        {
          title: "Website SEO",
          href: "/website-seo",
          icon: Note3,
        },
        {
          title: "Plans",
          href: "/plans",
          icon: Note3,
        },
        {
          title: "Payment Methods",
          href: "/payment-methods",
          icon: Note3,
        },
      ]
    },
    {
      title: "Script Installation Request",
      icon: Book,
      child: [
        {
          title: "Pending Requests",
          href: "/pending-requests",
          icon: List,
        },
        {
          title: "Critical Requests",
          href: "/critical-requests",
          icon: Flag,
        },
        {
          title: "Completed Requests",
          href: "/completed-requests",
          icon: ListFill,
        },
      ],
    },
    {
      title: "App Sumo",
      icon: Components,
      child: [
        {
          title: "Website Owners",
          href: "/website-owners",
          icon: List,
        },
        {
          title: "Codes",
          href: "/sumo-codes",
          icon: MenuBar,
        },
        {
          title: "Deleted Customers",
          href: "/deleted-appsumo",
          icon: Flag,
        }
      ],
    },
    {
      title: "Staff",
      icon: User,
      child: [
        {
          title: "Staff Lists",
          href: "/staff",
          icon: List,
        },
        {
          title: "Roles",
          href: "/role",
          icon: Graph,
        },
        {
          title: "Permissions",
          href: "/permission",
          icon: Note3,
        },
        {
          title: "Activity Log",
          href: "/activity",
          icon: MenuBar,
        }
      ],
    },
 

  ],
 
  sidebarNav: {
    modern: [
      {
        title: "Home",
        icon: DashBoard,
        href: "/dashboard",
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "visitors",
            href: "/visitors",
            icon: Cart,
          }
        ],
      },
      {
        title: "Website Owners",
        icon: Application,
        child: [
          {
            title: "Website Owners List",
            href: "/website-owners-list",
            icon: Files,
          },
          {
            title: "Add Website Owners",
            href: "/add-website-owner",
            icon: Files,
          },
          {
            title: "Unverified Owners",
            href: "/unverified-owners",
            icon: Files,
          },
          {
            title: "Deleted Owners",
            href: "/deleted-owners",
            icon: Flag,
          },
        ],
      },
      {
        title: "Script Installation Request",
        icon: Book,
        child: [
          {
            title: "Pending Requests",
            href: "/pending-requests",
            icon: List,
          },
          {
            title: "Critical Requests",
            href: "/critical-requests",
            icon: Flag,
          },
          {
            title: "Completed Requests",
            href: "/completed-requests",
            icon: ListFill,
          },
        ],
      },
      {
        title: "App Sumo",
        icon: Components,
        child: [
          {
            title: "Website Owners",
            href: "/website-owners",
            icon: List,
          },
          {
            title: "Codes",
            href: "/sumo-codes",
            icon: MenuBar,
          },
          {
            title: "Deleted Customers",
            href: "/deleted-appsumo",
            icon: Flag,
          }
        ],
      },
      {
        title: "Staff",
        icon: User,
        child: [
          {
            title: "Staff Lists",
            href: "/staff",
            icon: List,
          },
          {
            title: "Roles",
            href: "/role",
            icon: Graph,
          },
          {
            title: "Permissions",
            href: "/permission",
            icon: Note3,
          },
          {
            title: "Activity Log",
            href: "/activity",
            icon: MenuBar,
          }
        ],
      },
      {
        title: "Coupons",
        icon: Note3,
        child: [
          {
            title: "Coupons",
            href: "/coupons",
          },
        ]
      },
      {
        title: "Script Id Info",
        icon: Authentication,
        child: [
          {
            title: "Script Id",
            href: "/script-id",
          },
        ]
      },
      {
        title: "Email",
        icon: Envelope,
        child: [
          {
            title: "Email Templates",
            href: "/email-templates",
            icon: Envelope,
          },
          {
            title: "Send Email",
            href: "/send-email",
            icon: Envelope,
          },
          {
            title: "Newsletter Templates",
            href: "/newsletter",
            icon: Envelope,
          },
        ]
      },
      {
        title: "Enquiry Form",
        icon: ClipBoard,
        child: [
          {
            title: "Enquiry Form",
            href: "/enquiry-form",
          },
        ]
      },
      {
        title: "Feedbacks",
        icon: UserSign,
        child: [
          {
            title: "Feedbacks",
            href: "/feedback",
          },
        ]
      },
      {
        title: "Reports",
        icon: ClipBoard2,
        child: [
          {
            title: "Payments",
            href: "/payments",
            icon: Payment,
          },
          {
            title: "Registrations",
            href: "/registrations",
            icon: Register,
          },
          {
            title: "Cancellations",
            href: "/cancellations",
            icon: Cancellation,
          },
          {
            title: "Refunds",
            href: "/refunds",
            icon: Refund,
          },
          {
            title: "User URL Search Log",
            href: "/logs",
            icon: UserLog,
          },
        ]
      },
      {
        title: "Support",
        icon: BubbleChart,
        child: [
          {
            title: "Live Chat",
            href: "/live-chat",
            icon: LiveChat,
          },
          {
            title: "All Tickets",
            href: "/all-ticket",
            icon: Envelope,
          },
          {
            title: "Resolved Ticket",
            href: "/resolved-ticket",
            icon: Envelope,
          },
          {
            title: "Pending Ticket",
            href: "/pending-ticket",
            icon: Envelope,
          },
        ]
      },
      {
        title: "Tester",
        icon: Pointer,
        child: [
          {
            title: "Makkpress Testers",
            href: "/makkpress-testers",
            icon: Pointer,
          },
          {
            title: "Installation Requests",
            href: "/install-requests",
            icon: Pointer,
          },
        ]
      },
      {
        title: "Settings",
        icon: Settings,
        child: [
          {
            title: "General",
            href: "/general",
            icon: Note3,
          },
          {
            title: "Security",
            href: "/security",
            icon: Note3,
          },
          {
            title: "Website SEO",
            href: "/website-seo",
            icon: Note3,
          },
          {
            title: "Plans",
            href: "/plans",
            icon: Note3,
          },
          {
            title: "Payment Methods",
            href: "/payment-methods",
            icon: Note3,
          },
        ]
      },
    ],
    classic:[
      {
        title: "Home",
        icon: DashBoard,
        href: "/dashboard",
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "visitors",
            href: "/visitors",
            icon: Cart,
          }
        ],
      },
      {
        title: "Website Owners",
        icon: Application,
        child: [
          {
            title: "Website Owners List",
            href: "/website-owners-list",
            icon: Files,
          },
          {
            title: "Add Website Owners",
            href: "/add-website-owner",
            icon: Files,
          },
          {
            title: "Unverified Owners",
            href: "/unverified-owners",
            icon: Files,
          },
          {
            title: "Deleted Owners",
            href: "/deleted-owners",
            icon: Flag,
          },
        ],
      },
      {
        title: "Script Installation Request",
        icon: Book,
        child: [
          {
            title: "Pending Requests",
            href: "/pending-requests",
            icon: List,
          },
          {
            title: "Critical Requests",
            href: "/critical-requests",
            icon: Flag,
          },
          {
            title: "Completed Requests",
            href: "/completed-requests",
            icon: ListFill,
          },
        ],
      },
      {
        title: "App Sumo",
        icon: Components,
        child: [
          {
            title: "Website Owners",
            href: "/website-owners",
            icon: List,
          },
          {
            title: "Codes",
            href: "/sumo-codes",
            icon: MenuBar,
          },
          {
            title: "Deleted Customers",
            href: "/deleted-appsumo",
            icon: Flag,
          }
        ],
      },
      {
        title: "Staff",
        icon: User,
        child: [
          {
            title: "Staff Lists",
            href: "/staff",
            icon: List,
          },
          {
            title: "Roles",
            href: "/role",
            icon: Graph,
          },
          {
            title: "Permissions",
            href: "/permission",
            icon: Note3,
          },
          {
            title: "Activity Log",
            href: "/activity",
            icon: MenuBar,
          }
        ],
      },
      {
        title: "Coupons",
        icon: Note3,
        child: [
          {
            title: "Coupons",
            href: "/coupons",
          },
        ]
      },
      {
        title: "Script Id Info",
        icon: Authentication,
        child: [
          {
            title: "Script Id",
            href: "/script-id",
          },
        ]
      },
      {
        title: "Email",
        icon: Envelope,
        child: [
          {
            title: "Email Templates",
            href: "/email-templates",
            icon: Envelope,
          },
          {
            title: "Send Email",
            href: "/send-email",
            icon: Envelope,
          },
          {
            title: "Newsletter Templates",
            href: "/newsletter",
            icon: Envelope,
          },
        ]
      },
      {
        title: "Enquiry Form",
        icon: ClipBoard,
        child: [
          {
            title: "Enquiry Form",
            href: "/enquiry-form",
          },
        ]
      },
      {
        title: "Feedbacks",
        icon: UserSign,
        child: [
          {
            title: "Feedbacks",
            href: "/feedback",
          },
        ]
      },
      {
        title: "Reports",
        icon: ClipBoard2,
        child: [
          {
            title: "Payments",
            href: "/payments",
            icon: Payment,
          },
          {
            title: "Registrations",
            href: "/registrations",
            icon: Register,
          },
          {
            title: "Cancellations",
            href: "/cancellations",
            icon: Cancellation,
          },
          {
            title: "Refunds",
            href: "/refunds",
            icon: Refund,
          },
          {
            title: "User URL Search Log",
            href: "/logs",
            icon: UserLog,
          },
        ]
      },
      {
        title: "Support",
        icon: BubbleChart,
        child: [
          {
            title: "Live Chat",
            href: "/live-chat",
            icon: LiveChat,
          },
          {
            title: "All Tickets",
            href: "/all-ticket",
            icon: Envelope,
          },
          {
            title: "Resolved Ticket",
            href: "/resolved-ticket",
            icon: Envelope,
          },
          {
            title: "Pending Ticket",
            href: "/pending-ticket",
            icon: Envelope,
          },
        ]
      },
      {
        title: "Tester",
        icon: Pointer,
        child: [
          {
            title: "Makkpress Testers",
            href: "/makkpress-testers",
            icon: Pointer,
          },
          {
            title: "Installation Requests",
            href: "/install-requests",
            icon: Pointer,
          },
        ]
      },
      {
        title: "Settings",
        icon: Settings,
        child: [
          {
            title: "General",
            href: "/general",
            icon: Note3,
          },
          {
            title: "Security",
            href: "/security",
            icon: Note3,
          },
          {
            title: "Website SEO",
            href: "/website-seo",
            icon: Note3,
          },
          {
            title: "Plans",
            href: "/plans",
            icon: Note3,
          },
          {
            title: "Payment Methods",
            href: "/payment-methods",
            icon: Note3,
          },
        ]
      },
    ],
  },
};
