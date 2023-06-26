import React, { useEffect, useState } from 'react';
import { Select, SelectProps } from 'antd';
import variables from '../../styles/variables.module.scss';
import { t } from 'i18next';
import '../../../pages/i18n.js'

type TeamSelectProps = {
    teams: string[],
    addStyle?: React.CSSProperties,
}

const TeamSelect: React.FC<TeamSelectProps> = ({
    teams, addStyle
}) => {
    const options: SelectProps['options'] = [];
    const [selectedTeams, setSelectedTeams] = useState<string[]>();

    useEffect(() => {
        console.log(selectedTeams);
    }, [selectedTeams]);
    
    teams.forEach((team) => {
      options.push({
        label: team,
        value: team,
      });
    });

    return (
        <>
            <Select
                mode="multiple"
                style={{ ...addStyle, minWidth: variables.selectorMinWidth }}
                placeholder={`${t('o-new-project-modal-assigned-teams-placeholder')}`}
                onChange={setSelectedTeams}
                options={options}
                value={selectedTeams}
            />
        </>
    );
};

export { TeamSelect };