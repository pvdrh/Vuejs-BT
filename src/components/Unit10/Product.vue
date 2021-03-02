<template>
  <div class="container">
    <div class="add-product">
      <el-button style="float:right; margin:20px" type="primary" @click="createProduct()">Thêm mới</el-button>
      <br>
      <input prefix-icon="el-icon-search" v-model="search" class="search" type="text" placeholder="Tìm kiếm" @keydown.enter="searchProduct">
    </div>
    <el-dialog
        title="Chỉnh sửa sản phẩm"
        :visible.sync="editModal"
        width="40%"
        style="text-align: left"
    >
      <el-row :gutter="20">
        <el-col :span="10">
          <LoadFile :productImg="productImg" @onChangeImage="changeImage" @deleteImage="deleteImage" :isOpenEdit="openEdit"/>
        </el-col>
        <el-col :span="14">
          <el-form :model="ruleForm"  ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Tên sản phẩm" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Trạng Thái" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="Giá" prop="price">
          <el-input type="number" v-model="ruleForm.price"></el-input>
        </el-form-item>
          <div>
        <input type="file" @change="onChangeImage">
        <button @click="uploadImage">Upload</button>
    </div>
      </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
              <el-button @click="editModal = false">Hủy</el-button>
              <el-button type="primary" @click="editProduct('ruleForm')">Cập nhật</el-button>
            </span>
    </el-dialog>
    <el-dialog
        title="Tạo mới sản phẩm"
        :visible.sync="dialogVisible"
        width="50%"
        style="text-align: left"
        >
      <el-row :gutter="20">
        <el-col :span="10">
          <LoadFile :isOpen="open" @onChangeImage="changeImage" @deleteImage="deleteImage"/>
        </el-col>
        <el-col :span="14">
          <el-form :model="ruleForm" :label-position="label" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="Tên sản phẩm" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Mô tả" prop="description">
              <el-input v-model="ruleForm.description"></el-input>
            </el-form-item>
            <el-form-item label="Giá" prop="price">
              <el-input type="number" v-model="ruleForm.price"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Hủy</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">Tạo mới</el-button>
        </span>
    </el-dialog>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Tên sản phẩm"
          prop="name"
      >
      </el-table-column>
      <el-table-column
          label="Giá"
          prop="price">
          <template slot-scope="scope">
          <span style="margin-left: 10px">{{ Number( scope.row.price).toLocaleString('vi-VN') }} VNĐ</span>
          </template>
      </el-table-column>
      <el-table-column
          label="Trạng thái"
          prop="description">
      </el-table-column>
      <el-table-column
          align="right"
      label="Action">
        <template slot-scope="scope">
          <el-button
              round
              size="medium"
              @click="handleEdit(scope.$index, scope.row)">Chỉnh sửa</el-button>
              <el-button
                round
                size="medium"
                v-model="search"
                type="danger"
                @click="confirmDelete(scope.$index, scope.row)">Xóa</el-button>
          <el-dialog
              style="text-align:center"
              title="Chỉnh sửa sản phẩm"
              :visible.sync="editModal"
              width="40%">
            <el-form :model="ruleForm"  ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="Tên sản phẩm" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Mô tả" prop="description">
                <el-input v-model="ruleForm.description"></el-input>
              </el-form-item>
              <el-form-item label="Giá" prop="price">
                <el-input type="number" v-model="ruleForm.price"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="editModal = false">Hủy</el-button>
              <el-button type="primary" @click="editProduct('ruleForm')">Cập nhật</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="changePage"
          :total="total"
          :page-size="5">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import LoadFile from "@/components/Unit10/LoadFile.vue";
export default {
  components: {
    LoadFile
  },
  data() {
    return {
         dialogVisible: false,
      tableData: [],
      search: '',
      editModal: false,
      label: 'top',
      ruleForm: {
        name: '',
        description: '',
        price: ''
      },
      image: '',
      open: false,
      openEdit: false,
      total: 0,
      idEdit: '',
      baseUrl: 'http://vuecourse.zent.edu.vn/storage/',
      productImg: ''
    }
  },
  watch: {
    dialogVisible (value) {
      if (value) {
        this.image = ''
        this.open = true
      } else {
        this.open = false
      }
    },
    editModal (value) {
      if (value) {
        this.image = ''
        this.openEdit = true
      } else {
        this.openEdit = false
      }
    },
  },
  methods: {
    createProduct() {
      this.dialogVisible = true
      this.ruleForm.name = ''
      this.ruleForm.description = ''
      this.ruleForm.price = ''
    },
    handleEdit(index, row) {
      this.editModal = true
      this.ruleForm.name = row.name
      this.ruleForm.description = row.description
      this.ruleForm.price = row.price
      this.idEdit = row.id
      if (row.image) {
        this.productImg = 'http://vuecourse.zent.edu.vn/storage/' + row.image
      }
    },
    editProduct() {
      console.log(this.idEdit)
          this.updateProduct(this.idEdit)
          this.editModal = false
          this.$message({
            message: 'Updated success!',
            type: 'success'
      });
    },
    updateProduct(id) {
      const fromData = new FormData()
      fromData.append('name', this.ruleForm.name)
      fromData.append('description', this.ruleForm.description)
      fromData.append('price', this.ruleForm.price)
      if (this.image) {
        fromData.append('image', this.image)
      }
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
        data: fromData
      }).then(() => {
        this.getData()
      })
    },
    handleDelete(index, row) {
      this.$confirm('Are you sure want delete?', 'Caution', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + row.id,
        }).then(() => {
          this.getData()
        })
      }).catch(() => {
      });
    },
    storeProduct() {
      const fromData = new FormData()
      fromData.append('name', this.ruleForm.name)
      fromData.append('description', this.ruleForm.description)
      fromData.append('price', this.ruleForm.price)
      if (this.image) {
        fromData.append('image', this.image)
      }
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: fromData
      }).then(() => {
        this.getData()
      })
    },
    submitForm() {
          this.storeProduct()
          this.dialogVisible = false
          this.$message({
            message: 'Created success!',
            type: 'success'
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
     getData() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
      }).then((response) => {
        this.tableData = response.data.data.data
        console.log(response)
        this.total = response.data.data.total
      }).catch((error) => {
        console.log(error);
      });
    },
    changePage(page) {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products?page=' + page,
      }).then((response) => {
        this.tableData = response.data.data.data
        this.total = response.data.data.total
      }).catch((error) => {
        console.log(error);
      });
    },
    searchProduct() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products?page=1',
        params: {
          q: this.search
        }
      }).then((response) => {
        this.tableData = response.data.data.data;
      })
    },
    formatDate (dateString) {
      return moment(dateString).format('hh:mm | DD/MM/YYYY')
    },
    changeFile(e) {
      if (e.target.files.length) {
        this.image = e.target.files[0]
      }
    },
    uploadFile() {
      const fromData = new FormData()
      fromData.append('name', 'Duy')
      fromData.append('price', 123456)
      fromData.append('image', this.image)
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: fromData
      }).then(() => {
        console.log('success')
      })
    },
    mounted() {
    this.getData()
  },
    changeImage(image) {
      this.image = image
    },
    deleteImage() {
      this.image = ''
    }
  },
  
}
</script>
<style lang="scss" scoped>
  .container {
    .add-product {
      text-align: left;
      .search {
        height: 30px;
        width: 250px;
        margin-top: 5px;
        margin-left: 50px;
        float: right;
      }
      .container > .product-img {
        align-items: center;
        display: flex;
        float: left;
        margin-right: 10px;
      }
    }
    .pagination {
      margin-top: 10px;
    }
  }
</style> 