<template>
  <div class="List">
    <table>
      <tr>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr v-if="prd.length === 0">
        <td colspan="6" class="text">Không có dữ liệu</td>
      </tr>
      <tr
        v-for="(product, index) in getPaginationProductions"
        :key="product.id"
      >
        <td>{{ product.id }}</td>
        <td>
          <span class="main">{{ product.name }}</span>
        </td>
        <td>{{ formatPrice(product.price) }}</td>
        <td class="text">{{ product.quantity }}</td>
        <td class="text">
          <span v-if="product.quantity > 0" class="text2">Còn hàng</span>
          <span v-else class="text3">Hết hàng</span>
        </td>
        <td>
          <button class="edit" @click="editPro(product)">Sửa</button>
          <button class="del" @click="delPro(index)">
            Xóa
          </button>
        </td>
      </tr>
    </table>
    <div class="wrap">
      <div class="detail">
        {{
          total === 0
            ? "Hiển thị 0 - 0 trên tổng 0 (0 trang)"
            : `Hiển thị ${from} - ${to} trên tổng ${total} (${lastPage} trang)`
        }}
      </div>
      <div>
        <button
          class="pbut"
          @click="goPrePage"
          :class="{ isBut: page }"
        >
          <!-- <img src="../../../assets/left-arrow.png" alt="" /> -->
        </button>
        <button
          class="pbut"
          @click="goNextPage"
          :class="{ isBut: isGoNextPageDisabled }"
        >
          <!-- <img src="../../../assets/right-arrow.png" alt="" /> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {
      currentPage: 1,
      perPage: 5,
    };
  },
  computed: {
    ...mapState(["prd"]),
    total() {
      return this.prd.length;
    },
    from() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    to() {
      let toItem = this.currentPage * this.perPage;
      return toItem < this.prd.length ? toItem : this.prd.length;
    },
    lastPage() {
      return Math.ceil(this.prd.length / this.perPage);
    },
    page() {
      return this.currentPage <= 1 || this.prd.length === 0;
    },
    isGoNextPageDisabled() {
      return this.currentPage >= this.lastPage || this.prd.length === 0;
    },
    getPaginationProductions() {
      return this.prd.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  methods: {
    ...mapMutations(["edit2", "del2"]),
    formatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " đ";
    },
    editPro(product) {
      this.edit2(product);
    },
    delPro(index) {
      this.del2(index);
    },
    goNextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage += 1;
      }
    },
    goPrePage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;
$colorOrange: #f2994a;
.List {
  .text {
    text-align: center;
  }
  .text2 {
    color: $colorGreen;
  }
  .text3 {
    color: $colorRed;
  }
  .main {
    color: $colorMain;
  }
  table {
    border: 1px solid $colorStroke;
    border-spacing: 0;
    width: 900px;
    th {
      background: $colorTableHeader;
      padding: 14px;
      border-right: 1px solid $colorStroke;
      border-bottom: 1px solid $colorStroke;
    }
    td {
      text-align: left;
      padding: 12px;
      font-size: 14px;
      border-right: 1px solid $colorStroke;
    }
    .edit {
      background: $colorOrange;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: $colorWhite;
      width: 60px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
    }
    .del {
      background: $colorRed;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: $colorWhite;
      width: 60px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 8px;
    }
  }
  .wrap {
    margin: 16px 0 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .detail {
      color: $colorDefault;
    }
    .pbut {
      width: 32px;
      height: 32px;
      margin-left: 4px;
      padding: 3px;
      cursor: pointer;
      background: $colorWhite;
      border: 1px solid $colorDefault;
      img {
        width: 14px;
        height: 14px;
        margin-top: 5px;
      }
      &.isBut {
        background: $colorStroke;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
}
</style>