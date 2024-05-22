import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addDatas } from '../service/service';

function Add() {
  async function postData(val) {
    const data = await addDatas(val)
  }

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ name: '', price: '', des: '', imgURL: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required'),
          price: Yup.number()
            .required('Required'),
          des: Yup.string().required('Required'),
          imgURL: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          setTimeout(() => {
            postData(values)
          }, 400);
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}

            <label htmlFor="des">Description</label>
            <input id="des" type="text" {...formik.getFieldProps('des')} />
            {formik.touched.des && formik.errors.des ? (
              <div>{formik.errors.des}</div>
            ) : null}
            <label htmlFor="imgURL">Img URL</label>
            <input id="imgURL" type="text" {...formik.getFieldProps('imgURL')} />
            {formik.touched.imgURL && formik.errors.imgURL ? (
              <div>{formik.errors.imgURL}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Add