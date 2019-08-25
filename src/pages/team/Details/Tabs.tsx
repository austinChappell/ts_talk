import React, { useCallback } from 'react';
import styled from '@emotion/styled';

interface Tab {
  content: React.ReactElement;
  id: TabId;
  label: string;
}

interface Props {
  activeTabId: string;
  onSelectTab: React.Dispatch<React.SetStateAction<TabId>>;
  tabs: Tab[];
}

interface ListItemProps {
  active: boolean;
}

export type TabId = 'roster' | 'stats';

const List = styled.ul({
  display: 'flex',
});
const ListItem = styled.li<ListItemProps>((props) => ({
  borderBottom: props.active ? '1px solid red' : 'none',
  cursor: 'pointer',
  padding: 8,
}));

const Tabs: React.FC<Props> = (props) => {
  const handleClick = useCallback((id: TabId) => () => {
    props.onSelectTab(id);
  }, [props])

  const selectedTab = props.tabs.find(tab => tab.id === props.activeTabId);

  return (
    <>
      <List>
        {props.tabs.map(tab => (
          <ListItem
            active={tab.id === props.activeTabId}
            key={tab.id}
            onClick={handleClick(tab.id)}
          >
            {tab.label}
          </ListItem>
        ))}
      </List>
      {selectedTab && selectedTab.content}
    </>
  )
}

export default Tabs;
