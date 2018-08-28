import React, { PureComponent } from 'react';

import styles from './Table.less';

class Table extends PureComponent {
  getAppList = () => {
    const { data } = this.props;

    const listData = data || [];
    return ['', ...listData].map((item) => {
      return (
        <div
          key={item ? item.id : 'addNew'}
          className={styles.appCard}
        >
          {item ? (
            <div className={styles.itemBox} >
              {item.coverUrl ? (
                <img src={`${config.domain2}${item.coverUrl}`} className={styles.itemImg} alt="coverImg" />
              ) : <div className={styles.itemImg} alt="coverImg" />

              }
              <div
                className={styles.editMask}
              >
                {this.props.getExtra(item)}
              </div>
            </div>
          ) : (
            <div className={styles.addNew} style={{ backgroundColor: '#fff' }}>
              {/* <span className={styles.anticonPlus} /> */}
              <img src={plusIcon} alt="" className={styles.addIcon} />
            </div>
          )}

          {this.getItemsDetail(item)}
        </div>
      );
    });
  }

  // 获取item的描述和app名称
  getItemsDetail = (item) => {
    if (item) {
      return (
        <div>
          <span className={styles.itemName}>
            {item.name}
          </span>
          <span className={styles.itemDesc}>
            {item.description}
          </span>
        </div>
      );
    } else {
      return <span className={styles.itemName}>{this.props.addText}</span>;
    }
  }

  render() {
    return (
      <div className={styles.appList}>
        {this.getAppList()}
      </div>
    );
  }
}

export default Table;