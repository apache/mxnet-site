

``mx.symbol.elemwise_mul``
====================================================

Description
----------------------

Multiplies arguments element-wise.

The storage type of ``elemwise_mul`` output depends on storage types of inputs

- elemwise_mul(default, default) = default
   - elemwise_mul(row_sparse, row_sparse) = row_sparse
   - elemwise_mul(default, row_sparse) = row_sparse
   - elemwise_mul(row_sparse, default) = row_sparse
   - elemwise_mul(csr, csr) = csr
   - otherwise, ``elemwise_mul`` generates output with default storage

Usage
----------

.. code:: r

	mx.symbol.elemwise_mul(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol                                          |
|                                        | first input                                                |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol                                          |
|                                        | second input                                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


