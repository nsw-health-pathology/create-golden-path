import { projectNameQuestion } from "../questions";
import { awsAccountQuestions } from "../questions/aws-account.questions";
import { environmentSelectionQuestion } from "../questions/environments-selection.question";
import { taggingQuestions } from "../questions/tagging.questions";
import { awsCdkTemplate } from "../templates/aws-cdk/aws-cdk.template";

export async function awsCdkActions(): Promise<any>  {

    const projectName = await projectNameQuestion();

    const environmentSelection = await environmentSelectionQuestion();

    const tagging = await taggingQuestions();

    const accountDetails = await awsAccountQuestions();

    return awsCdkTemplate();
}
