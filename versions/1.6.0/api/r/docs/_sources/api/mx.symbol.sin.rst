

``mx.symbol.sin``
==================================

Description
----------------------

Computes the element-wise sine of the input array.

The input should be in radians (:math:`2\pi` rad equals 360 degrees).

.. math::

   sin([0, \pi/4, \pi/2]) = [0, 0.707, 1]

The storage type of ``sin`` output depends upon the input storage type:

	- sin(default) = default
	- sin(row_sparse) = row_sparse
	- sin(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.sin(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L47

