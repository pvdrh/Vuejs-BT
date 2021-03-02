<template>
  <div class="container">
    <div class="add-product">
      <el-button style="float:right; margin:20px" type="primary" round @click="createProduct()">Thêm sản phẩm</el-button>
    </div>
    <el-dialog
        title="Tạo mới sản phẩm"
        :visible.sync="dialogVisible"
        width="40%"
        style="text-align: left"
    >
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
      <span slot="footer" class="dialog-footer">
        <el-button round @click="dialogVisible = false">Hủy</el-button>
        <el-button type="success" round  @click="submitForm('ruleForm')">Tạo mới</el-button>
        </span>
    </el-dialog>
    <div class="search" style="width: 250px;
    position: absolute">
      <el-input
          placeholder="Type something"
          prefix-icon="el-icon-search"
          @keyup.enter.native="searchList()"
          v-model="search">
      </el-input>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
              fixed
              prop="image"
              label="Ảnh">
            <template v-slot="product">
              <img style="max-width:50px;max-height:50px;border-radius:50%" :src="'http://vuecourse.zent.edu.vn/storage/'+ product.row.image" alt="">
            </template>
          </el-table-column>
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
            <el-form  ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
export default {
  data() {
    return {
      image: '',
      tableData: [],
      search: '',
      dialogVisible: false,
      editModal: false,
      ruleForm: {
        name: '',
        description: '',
        price: ''
      },
      total: 0,
      idEdit: ''
    }
  },
  methods: {
    createProduct() {
      this.ruleForm.description = ''
      this.dialogVisible = true
      this.ruleForm.price = ''
      this.ruleForm.name = ''
    },
    handleEdit(index, row) {
      this.idEdit = row.id
      this.editModal = true
      this.ruleForm.name = row.name
      this.ruleForm.price = row.price
      this.ruleForm.description = row.description
    },
    editProduct(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateProduct(this.idEdit)
          this.editModal = false
          this.$message.success('Cập nhật thành công')
        } else {
          return false;
        }
      });
    },
    updateProduct(id) {
      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
        data: {
          name: this.ruleForm.name,
          description: this.ruleForm.description,
          price: this.ruleForm.price,
        }
      }).then(() => {
        this.getData()
      }).catch((error) => {
        console.log(error);
      });
    },
    confirmDelete(row) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
        this.handleDelete(row)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    submitForm() {
          this.storeProduct()
          this.dialogVisible = false
          this.$message.success('Tạo mới thành công')
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
    storeProduct() {
        const formData= new FormData()
        formData.append('name',this.name)
        formData.append('price',this.price)
        formData.append('description',this.description)
        if (this.is_update_image){
          formData.append('image',this.image)
        }else{
          console.log('img null')
        }
        axios({
          method: 'post',
          url: 'http://vuecourse.zent.edu.vn/api/products',
          data: formData
        }).then((response) => {
          this.getData();
          console.log(response)
          this.$message.success('Create success')
          this.dialogFormVisible = false;
          this.name = ''
          this.description = ''
          this.price = ''
          this.image=''

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
    searchList(){
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products?q='+this.search.toLowerCase(),
      }).then((response) => {
        this.tableData = response.data.data.data
        console.log(response)
        console.log('get data')
        this.pageSize = response.data.data.per_page;
        this.total = response.data.data.total;
        this.currentPage = response.data.data.current_page
      }).catch((error) => {
        console.log(error);
      });
    },
     onChangeImage (e){
        if(e.target.files.length){
          this.image = e.target.files[0]
        }
    },
    uploadImage(){
      const formData = new FormData();
      formData.append('name', 'Duy')
      formData.append('price', '123456')
      formData.append('image', this.image)

      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: formData
      }).then(() => {
      //  console.log(success);
      })
    }

  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
.container {
  .pagination {
    margin-top: 10px;
  }
}
</style>