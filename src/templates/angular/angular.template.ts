import { FileName } from '../../models/file';
import { defaultTemplate } from '../default/default.template';

export function angularTemplate() {
    const fileName = FileName.BUG_REPORT;

    const fileContent = (): string => {
        return `# Proof Of Concept
        `;
     }

    return defaultTemplate(fileName, fileContent());
}
