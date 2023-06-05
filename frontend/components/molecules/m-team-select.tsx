import React, { useEffect, useState } from 'react';
import { Select, SelectProps } from 'antd';

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
                style={{ ...addStyle, minWidth: '200px' }}
                placeholder="select participating teams"
                onChange={setSelectedTeams}
                options={options}
                value={selectedTeams}
            />
        </>
    );
};

export { TeamSelect };