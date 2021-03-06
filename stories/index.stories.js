import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { days, menuItems, actionableMenu, markdown } from './data.js';

import { Theme, ActionableItem, DropLink, Button, CheckBox, BreadCrumb,
 List, TimeLine, Sidebar, Panel, ProgressKPI, Login, Forgot, Loading,
 LoadBar, MenuItem, MarkdownParser, Filter, Icon } from '../src/index';

import { text, boolean, number, array, object, select } from '@storybook/addon-knobs';



/**
 *  Actionable Item
 */

storiesOf('ActionableItem', module).add('default configuration', () => (<Theme.Theme>
    <ActionableItem label={text('Label', 'Make dinner')}
      onDropdownSelect={(value) => action('onDropdownSelect')(value)}
      dropdown={object('Options', actionableMenu)}
      done={boolean('Done', true)}
    />
</Theme.Theme>));



/**
 *  BreatheCrumb
 */

const levels = [
    { label: 'Home', slug: 'home' },
    { label: 'Contact Us', slug: 'contact-us' }
];
storiesOf('BreatheCrumb', module).add('default configuration', () => (<Theme.Theme>
    <BreadCrumb
      levels={object('Levels', levels)}
      logoURL={null}
      onClick={(value) => action('onSelect')(value)}
    />
</Theme.Theme>));


/**
 *  DropLink
 */

const droplinkOptions = [
    { label: 'Mark as read', url: 'hello' },
    { label: 'Other sample action', url: 'hello'}
];
storiesOf('DropLink', module).add('default configuration', () => (<Theme.Theme>
    <DropLink
      label={text('label', 'Click me to see the options available for this action')}
      className={text('className', '')}
      dropdown={object('dropdown', droplinkOptions)}
      onSelect={(value) => action('onSelect')(value)}
    > I am a dropdown</DropLink>
</Theme.Theme>));



/**
 *  CheckBox
 */

storiesOf('CheckBox', module).add('default configuration', () => (<Theme.Theme>
    <div class="col-6 mx-auto">
      <CheckBox
        label={text('label', 'Finish replits about react.js')}
        withToggler={boolean('withToggler',false)}
        checked={boolean('checked', true)}
        onClick={(value) => action('onClick')(value)}
      />
    </div>
</Theme.Theme>),{
  notes: { markdown: 'welele' }
});




/**
 *  Button
 */

storiesOf('Button', module).add('default configuration', () => (<Theme.Theme>
    <Button
      className={text('className', 'w-50')}
      icon={text('icon', 'trash')}
      type={select('Type', ['light'], 'light')}
      dropdown={[
        { label: 'First action', url: 'hello' }
      ]}
      onClick={(value) => action('onClick')(value)}
    >
      Click Me
    </Button>
</Theme.Theme>));



/**
 *  List
 */

storiesOf('List', module).add('default configuration', () => (<Theme.Theme>
    <List>
      <ActionableItem label={text('Label', 'Make dinner')}
        onDropdownSelect={(value) => action('onDropdownSelect')(value)}
        dropdown={object('Options', actionableMenu)}
      />
      <ActionableItem label={text('Label', 'Make dinner')}
        onDropdownSelect={(value) => action('onDropdownSelect')(value)}
        dropdown={object('Options', actionableMenu)}
      />
    </List>
</Theme.Theme>));

/**
 *  Loading
 */

storiesOf('Loading', module).add('default configuration', () => (<Theme.Theme>
    <Loading
      show={boolean('show', true)}
    />
</Theme.Theme>));

/**
 *  LoadBar
 */

storiesOf('Load bar', module).add('default configuration', () => (<Theme.Theme>
    <LoadBar />
</Theme.Theme>));

/**
 *  LoadBar
 */

storiesOf('MarkdownParser', module).add('default configuration', () => (<Theme.Theme>
    <div className="row mt-5">
      <div className="col-12 col-sm-8 col-lg-6 mx-auto">
        <MarkdownParser source={text('source',markdown)} />
      </div>
    </div>
</Theme.Theme>), {
    knobs: {
      escapeHTML: false
    }
  });

/**
 *  Filter
 */

storiesOf('Filter', module).add('gender example', () => (<Theme.Theme>
    <div className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
      <Filter
        label={text('label','Gender')}
        onChange={(value) => action('onChange')(value)}
        placeholder={text('placeholder','Select one gender')}
        multiselect={boolean('multiselect',false)}
        options={object('options',[
          {label: 'Male', value: 'male'},
          {label: 'Female', value: 'female'}
        ])}
      />
    </div>
</Theme.Theme>));

/**
 *  Filter
 */

storiesOf('Filter', module).add('tags example', () => (<Theme.Theme>
    <div className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
      <Filter
        label={text('label','Tags')}
        onChange={(value) => action('onChange')(value)}
        placeholder={text('placeholder','Select one or more tags')}
        multiselect={boolean('multiselect',true)}
        options={object('options',[
          {label: 'html', value: 'html'},
          {label: 'react.js', value: 'react.js'},
          {label: 'javascript', value: 'javascript'},
          {label: 'rest', value: 'rest'},
          {label: 'flask', value: 'flask'},
          {label: 'django', value: 'django'},
          {label: 'css', value: 'css'}
        ])}
      />
    </div>
</Theme.Theme>));

/**
 *  Filter
 */

storiesOf('Filter', module).add('with custom component', () => (<Theme.Theme>
    <div className="mx-auto mt-5" style={{ maxWidth: "300px" }}>
      <Filter
        label={text('label','Tags')}
        placeholder={text('placeholder','Select one or more tags')}
        multiselect={boolean('multiselect',true)}
        onChange={(opt) => action('onChange')(opt)}
        options={object('options',[
          {label: 'html', value: 'html'},
          {label: 'react.js', value: 'react.js'},
          {label: 'javascript', value: 'javascript'},
          {label: 'rest', value: 'rest'},
          {label: 'flask', value: 'flask'},
          {label: 'django', value: 'django'},
          {label: 'css', value: 'css'}
        ])}
        optionComponent={({data, onSelect, selected, onDeselect}) => (<CheckBox
            label={data.label}
            checked={selected}
            withToggler={boolean('withToggler',false)}
      			className={selected && 'selected'}
      			onClick={(e) => selected ? onDeselect(data) : onSelect(data)}
      		/>)
          }
      />
    </div>
</Theme.Theme>));


/**
 *  Timeline
 */

storiesOf('TimeLine', module).add('default configuration', () => (<Theme.Theme>
    <TimeLine
      days={object('Days', days)}
			onClick={(value) => action('onClick')(value)}
    />
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('default configuration', () => (<Theme.Theme>
    <Sidebar
      menu={() => <ul className="px-3">
				<MenuItem label="Syllabus" slug="syllabus" iconName="graduationCap" collapsed={false} onClick={(value) => action('onClick')(value)} />
				<MenuItem label="Attendancy" slug="attendancy" iconName="trash" collapsed={false} onClick={(value) => action('onClick')(value)} />
			</ul>}
			onBrandClick={(value) => action('onBrandClick')(value)}
    >
      <h1>This is the content of the page</h1>
    </Sidebar>
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with timeline', () => (<Theme.Theme>
    <Sidebar
      menu={() => <TimeLine
        days={days}
        height="100%"
      />}
			onBrandClick={(value) => action('onBrandClick')(value)}
    >
      <h1>This is the content of the page</h1>
    </Sidebar>
</Theme.Theme>));

/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with footer', () => (<Theme.Theme>
    <Sidebar
      menu={() => <TimeLine
        days={days}
        height="100%"
      />}
			onBrandClick={(value) => action('onBrandClick')(value)}
      footer={() => <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-bell"></i>
          <span className="badge badge-pill badge-warning notification">3</span>
        </a>
        <a href="#">
          <i className="fa fa-envelope"></i>
          <span className="badge badge-pill badge-success notification">7</span>
        </a>
        <a href="#">
          <i className="fa fa-cog"></i>
          <span className="badge-sonar"></span>
        </a>
        <a href="#">
          <i className="fa fa-power-off"></i>
        </a>
      </div>}>
      <h1>This is the content of the page</h1>
    </Sidebar>
</Theme.Theme>));
/**
 *  Sidebar
 */

storiesOf('Sidebar', module).add('with small footer', () => (<Theme.Theme>
    <Sidebar
      label={text('label', "BreatheCode Menu")}
      menu={() => <TimeLine
        days={days}
        height="100%"
      />}
			onBrandClick={(value) => action('onBrandClick')(value)}
      footer={() => <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-power-off"></i>
        </a>
      </div>}>
      <h1>This is the content of the page</h1>
    </Sidebar>
</Theme.Theme>));

/**
 *  MenuItem
 */

storiesOf('MenuItem', module).add('default configuration', () => (<Theme.Theme>
    <MenuItem
      label={text('label', 'First option of the menu')}
      iconName={text('icon', 'cog')}
      collapsed={boolean('collapsed', true)}
			onClick={(value) => action('onClick')(value)}
    />
</Theme.Theme>));

/**
 *  Panel
 */

storiesOf('Panel', module).add('default configuration', () => (<Theme.Theme>
    <Panel
      style={object('style', {padding: "10px"})}
      zDepth={text('zDepth', '1')}
    >
    I am a Panel, you can change my deph and I will look more 3D. Similar to matirial design panels.
    </Panel>
</Theme.Theme>));


/**
 *  KPI Progress
 */

storiesOf('ProgressKPI', module).add('default configuration', () => (<Theme.Theme>
    <ProgressKPI
      progress={text('progress', '80')}
    />
</Theme.Theme>));


/**
 *  Login
 */

storiesOf('Login', module).add('default configuration', () => (<Theme.Theme>
    <Login
			onSubmit={(value) => action('onSubmit')(value)}
			onForgot={(value) => action('onForgot')(value)}
      logoHeight={text('logoHeight', '100px')}
      appName={text('appName', 'BreatheCode Test App v0.1')}
      logoURL={text('logoURL', 'http://assets.breatheco.de/apis/img/icon/breathecode.png')}
    />
</Theme.Theme>));

/**
 *  Login
 */

storiesOf('Forgot', module).add('default configuration', () => (<Theme.Theme>
    <Forgot
			onClick={(value) => action('onSubmit')(value)}
			onBackToLogin={(value) => action('onBackToLogin')(value)}
      logoHeight={text('logoHeight', '100px')}
      appName={text('appName', 'BreatheCode Test App v0.1')}
      logoURL={text('logoURL', 'http://assets.breatheco.de/apis/img/icon/breathecode.png')}
    />
</Theme.Theme>));


/**
 *  Icons
 */

storiesOf('Icons', module).add('all icons', () => (<div>Icons<ul className="list-inline">
    <li className="list-inline-item"><Icon type="exclamationTriangle" /></li>
    <li className="list-inline-item"><Icon type="cog" /></li>
    <li className="list-inline-item"><Icon type="check" /></li>
    <li className="list-inline-item"><Icon type="graduationCap" /></li>
    <li className="list-inline-item"><Icon type="list" /></li>
    <li className="list-inline-item"><Icon type="search" /></li>
    <li className="list-inline-item"><Icon type="envelope" /></li>
    <li className="list-inline-item"><Icon type="sync" /></li>
    <li className="list-inline-item"><Icon type="bell" /></li>
    <li className="list-inline-item"><Icon type="play" /></li>
    <li className="list-inline-item"><Icon type="bars" /></li>
    <li className="list-inline-item"><Icon type="pencil" /></li>
    <li className="list-inline-item"><Icon type="question" /></li>
    <li className="list-inline-item"><Icon type="times" /></li>
    <li className="list-inline-item"><Icon type="arrowRight" /></li>
    <li className="list-inline-item"><Icon type="arrowLeft" /></li>
    <li className="list-inline-item"><Icon type="trash" /></li>
    <li className="list-inline-item"><Icon type="circle" /></li>
    <li className="list-inline-item"><Icon type="circleFilled" /></li>
    <li className="list-inline-item"><Icon type="youtube" /></li>
    <li className="list-inline-item"><Icon type="code" /></li>
    <li className="list-inline-item"><Icon type="exchange" /></li>
</ul></div>));