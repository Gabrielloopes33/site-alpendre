export type RevenueRange =
  | "lt_20"
  | "20_50"
  | "50_150"
  | "gt_150";

export interface LeadPayload {
  qualification: {
    revenue: RevenueRange;
    maturity: "never" | "no_success" | "some_contract" | "experienced";
    intent: "learn" | "assess_fit" | "ready_now" | "specific_project";
  };
  contact: {
    fullName: string;
    whatsapp: string;
    email?: string;
  };
}
