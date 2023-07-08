import React, { use, useEffect, useState } from 'react';
import { Select, SelectProps } from 'antd';
import variables from '../../styles/variables.module.scss';
import { t } from 'i18next';
import '../../../src/i18n'
import { Team } from '@prisma/client';

type TeamSelectProps = {
    teams: Team[],
    selectedTeams: Team[],
    addStyle?: React.CSSProperties,
    onSetTeams?: (teams: string[]) => void,
}

const TeamSelect: React.FC<TeamSelectProps> = ({
    teams, selectedTeams, addStyle, onSetTeams,
}) => {
    const options: SelectProps['options'] = [];
    const [selected, setSelected] = useState<string[]>(selectedTeams.map((team) => team.id));

    teams.forEach((team) => {
      options.push({
        label: team.name,
        value: team.id,
      });
    });

    useEffect(() => {
        if (onSetTeams) {
            onSetTeams(selected);
        }
    }, [selected]);

    return (
        <>
            <Select
                mode="multiple"
                style={{ ...addStyle, minWidth: variables.selectorMinWidth }}
                placeholder={`${t('o-new-project-modal-assigned-teams-placeholder')}`}
                onChange={setSelected}
                options={options}
                value={selected}
            />
        </>
    );
};

export { TeamSelect };