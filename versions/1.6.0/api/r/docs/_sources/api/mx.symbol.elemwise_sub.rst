

``mx.symbol.elemwise_sub``
====================================================

Description
----------------------

Subtracts arguments element-wise.

The storage type of ``elemwise_sub`` output depends on storage types of inputs

- elemwise_sub(row_sparse, row_sparse) = row_sparse
   - elemwise_sub(csr, csr) = csr
   - elemwise_sub(default, csr) = default
   - elemwise_sub(csr, default) = default
   - elemwise_sub(default, rsp) = default
   - elemwise_sub(rsp, default) = default
   - otherwise, ``elemwise_sub`` generates output with default storage

Usage
----------

.. code:: r

	mx.symbol.elemwise_sub(...)

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


