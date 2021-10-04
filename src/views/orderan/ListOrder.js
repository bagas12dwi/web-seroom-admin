import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCardBody,
  CCard,
  CCardHeader,
  DocsExample,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import { cilBell } from '@coreui/icons'

const ListOrder = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Data Orderan</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              List orderan untuk dikonfirmasi dan diteruskan ke Hero
            </p>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama Pemesan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tanggal Pesan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipe Orderan</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Room Size</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Total Pembayaran</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Fitri Ariska</CTableDataCell>
                  <CTableDataCell>03 Oktober 2021</CTableDataCell>
                  <CTableDataCell>Jl. Karah Tama Agung</CTableDataCell>
                  <CTableDataCell>Basic</CTableDataCell>
                  <CTableDataCell>16</CTableDataCell>
                  <CTableDataCell>35000</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Konfirmasi</CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListOrder
