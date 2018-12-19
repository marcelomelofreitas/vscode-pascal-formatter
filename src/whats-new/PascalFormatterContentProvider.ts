/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, Sponsor, ContentProvider, Header, Image } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewPascalFormatterContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `Make your <b>Pascal</b> source code look the way you want. It's not just a matter of <b>spaces vs tabs</b>,
            but using a <b>standardized</b> source code make it a lot more <b>easier to read</b>.`};
    }

    provideChangeLog(): ChangeLogItem[] {
        let changeLog: ChangeLogItem[] = [];
        changeLog.push({kind: ChangeLogKind.NEW, message: "<b>Multi-root</b> support"});
        changeLog.push({kind: ChangeLogKind.CHANGED, message: `Extracted from <b>Pascal</b> extension 
            <a title=\"Open Pascal Extension\" href=\"https://github.com/alefragnani/vscode-language-pascal/\">
            Pascal Extension</a>)</b>`});
        return changeLog;
    }

    provideSponsors(): Sponsor[] {
        let sponsors: Sponsor[] = [];
        return sponsors
    }
   
}