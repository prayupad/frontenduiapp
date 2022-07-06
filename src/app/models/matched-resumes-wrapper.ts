import { MatchedResume } from "./matched-resume";
import { ResultStatusInfo } from "./result-status-info";

export class MatchedResumesWrapper{
    resultStatusInfo: ResultStatusInfo;
    matchedResumeList: MatchedResume[];
    urlForUi: string;
}