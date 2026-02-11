import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FreeTrialForm {
    id: bigint;
    fullName: string;
    preferredProgram: string;
    email: string;
    preferredDateTime: string;
    notes?: string;
    submissionTime: bigint;
    phone: string;
}
export interface MembershipForm {
    id: bigint;
    preferredStartDate: string;
    fullName: string;
    email: string;
    message?: string;
    submissionTime: bigint;
    phone: string;
    selectedPlan: string;
}
export interface backendInterface {
    getAllFreeTrialForms(): Promise<Array<FreeTrialForm>>;
    getAllMembershipForms(): Promise<Array<MembershipForm>>;
    submitFreeTrialForm(fullName: string, phone: string, email: string, preferredDateTime: string, preferredProgram: string, notes: string | null): Promise<void>;
    submitMembershipForm(fullName: string, phone: string, email: string, selectedPlan: string, preferredStartDate: string, message: string | null): Promise<void>;
}
