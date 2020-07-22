

``mx.symbol.add_n``
======================================

Description
----------------------

Adds all input arguments element-wise.

.. math::

   add\_n(a_1, a_2, ..., a_n) = a_1 + a_2 + ... + a_n

``add_n`` is potentially more efficient than calling ``add`` by `n` times.

The storage type of ``add_n`` output depends on storage types of inputs

- add_n(row_sparse, row_sparse, ..) = row_sparse
- add_n(default, csr, default) = default
- add_n(any input combinations longer than 4 (>4) with at least one default type) = default
- otherwise, ``add_n`` falls all inputs back to default storage and generates default storage




Usage
----------

.. code:: r

	mx.symbol.add_n(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``args``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Positional input arguments                                 |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_sum.cc#L155

