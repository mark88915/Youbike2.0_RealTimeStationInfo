import { useState } from "react";

// 分頁資訊，包含總頁數、當前頁數、每頁資料筆數、是否可以上一頁或下一頁
export const usePagination = (dataAmount = 10) =>{
    const [paginationInfo, SetPaginationInfo] = useState({
        pageAmount: 0,
        currentPage: 1,
        pageDataAmount: dataAmount,
        canGoPrevious: function () {
            return this.currentPage - 1 >= 1 ? true : false;
        },
        canGoNext: function () {
            return this.currentPage + 1 <= this.pageAmount ? true : false;
        }
    });

    return [paginationInfo, SetPaginationInfo];
}

